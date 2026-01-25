/* eslint-disable @next/next/no-img-element */
"use client";
// Replaced next/image with native img for Vercel quota
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

import { PatientForm } from "@/components/forms/PatientForm";
import { PasskeyModal } from "@/components/PasskeyModal";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
const AdminLink = dynamic(() => import("@/components/AdminLink"), {
  ssr: false,
});

const Home = ({ searchParams }: SearchParamProps) => {
  const isAdmin = searchParams?.admin === "true";

  // Returning patient dialog state
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false); // for API/form only
  const [error, setError] = useState("");
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleReturningPatient = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch(
        `/api/checkEmail?email=${encodeURIComponent(email)}`
      );
      const data = await res.json();
      if (data.exists && data.userId) {
        startTransition(() => {
          router.push(`/patients/${data.userId}/register`);
        });
      } else if (data.exists && data.user) {
        // fallback if userId is not returned but user object is
        startTransition(() => {
          router.push(`/patients/${data.user.$id}/register`);
        });
      } else if (data.exists) {
        // fallback: let user type email, go to register, prefill
        startTransition(() => {
          router.push(
            `/patients/find-by-email?email=${encodeURIComponent(email)}`
          );
        });
      } else {
        setError("Nessun paziente trovato con questa email.");
      }
    } catch (err) {
      setError("Si e verificato un errore. Riprova.");
    }
    setLoading(false);
  };

  return (
    <div className="flex h-screen max-h-screen">
      {isAdmin && <PasskeyModal />}

      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Link href="/">
            <img
              src="/assets/icons/logo-full.svg"
              width={200}
              height={40}
              alt="DentaGest Logo"
              className="mb-12 h-10 w-fit"
              loading="eager"
              decoding="async"
              style={{ height: "auto", width: "auto" }}
            />
          </Link>

          <PatientForm />

          <div className="mt-8 flex flex-col items-center gap-2">
            <span className="text-sm text-dark-600">
              Gia registrato? Hai gia fissato un appuntamento in precedenza?
              Clicca il pulsante qui sotto.
            </span>
            <Button
              variant="outline"
              className={`shad-primary-btn w-full${isPending ? " cursor-not-allowed opacity-50" : ""}`}
              onClick={() => {
                startTransition(() => setOpen(true));
              }}
              type="button"
              disabled={isPending}
            >
              {isPending ? "Caricamento..." : "Paziente gia registrato?"}
            </Button>
          </div>

          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 DentaGest
            </p>
            <AdminLink className="text-green-500" />
          </div>
        </div>
      </section>

      {/* Returning Patient Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-[400px]">
          <DialogHeader>
            <DialogTitle>Paziente Registrato</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleReturningPatient} className="space-y-4">
            <Input
              type="email"
              placeholder="Inserisci la tua email registrata"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="text-white"
            />
            {error && <p className="text-xs text-red-500">{error}</p>}
            <DialogFooter>
              <Button
                type="submit"
                className={`shad-primary-btn w-full${loading || isPending ? " cursor-not-allowed opacity-50" : ""}`}
                disabled={loading || isPending}
              >
                {loading || isPending ? "Caricamento..." : "Continua"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      <img
        src="/assets/images/onboarding-img.webp"
        width={800}
        height={600}
        alt="Onboarding"
        className="side-img max-w-[50%]"
        loading="eager"
        decoding="async"
        style={{ height: "auto", width: "auto" }}
      />
    </div>
  );
};

export default Home;
