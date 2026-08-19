import { useEffect, useState } from "react";

type Health = { api: string; db: string };

function StatusRow({ label, ok, detail }: { label: string; ok: boolean; detail?: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className={ok ? "text-green-600" : "text-red-600"}>{ok ? "✓" : "✗"}</span>
      <span className="font-medium">{label}</span>
      {detail ? <span className="text-sm text-gray-500">{detail}</span> : null}
    </div>
  );
}

export function Home() {
  const [health, setHealth] = useState<Health | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/health")
      .then((res) => res.json())
      .then(setHealth)
      .catch((err) => setError(String(err)));
  }, []);

  return (
    <main className="mx-auto max-w-lg p-10 font-sans">
      <h1 className="mb-2 text-2xl font-bold">FutureFit Interview Starter</h1>
      <p className="mb-6 text-gray-600">If all three checks are green, your environment is ready.</p>
      <div className="space-y-2 rounded-lg border border-gray-200 p-4">
        <StatusRow label="Web" ok detail="you're looking at it" />
        <StatusRow label="API" ok={health?.api === "ok"} detail={error ?? undefined} />
        <StatusRow
          label="Database"
          ok={health?.db === "ok"}
          detail={health && health.db !== "ok" ? health.db : undefined}
        />
      </div>
      <p className="mt-6 text-sm text-gray-500">Something red? See the troubleshooting section in the README.</p>
    </main>
  );
}
