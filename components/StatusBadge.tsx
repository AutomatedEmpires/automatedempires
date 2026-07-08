import { statusMeta, type VentureStatus } from "@/lib/ventures";

export function StatusBadge({ status }: { status: VentureStatus }) {
  return (
    <span className={`status-badge status-${status.toLowerCase()}`}>
      <span className="status-dot" aria-hidden="true" />
      {statusMeta[status].label}
    </span>
  );
}
