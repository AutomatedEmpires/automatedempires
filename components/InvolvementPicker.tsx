"use client";

import { useState } from "react";
import { contactIntents, mailtoFor } from "@/lib/site";

export function InvolvementPicker() {
  const [selected, setSelected] = useState<number | null>(null);
  const active = selected !== null ? contactIntents[selected] : null;

  return (
    <div className="involvement">
      <div
        className="involvement-options"
        role="group"
        aria-label="What brought you here?"
      >
        {contactIntents.map((intent, index) => (
          <button
            key={intent.label}
            type="button"
            className={`involvement-option${selected === index ? " is-active" : ""}`}
            aria-pressed={selected === index}
            data-analytics={`involve_${index}`}
            onClick={() => setSelected(index)}
          >
            {intent.label}
          </button>
        ))}
      </div>

      <div className="involvement-panel" aria-live="polite">
        {active ? (
          <div className="involvement-detail">
            <p className="involvement-prompt">{active.prompt}</p>
            <p>{active.description}</p>
            <p className="involvement-include-label">Worth including</p>
            <ul className="involvement-bullets">
              {active.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            <a
              className="primary-action compact"
              data-analytics={`involve_send_${selected}`}
              href={mailtoFor(active.subject)}
            >
              Start this email
            </a>
          </div>
        ) : (
          <div className="involvement-empty">
            <p>
              Pick the line that fits. It shapes the rest — including what is
              worth putting in the first message — and opens a pre-titled email.
              No form, no silent submission.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
