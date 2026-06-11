"use client";

/**
 * EventBanner — top-of-page announcement bar.
 *
 * Drop-in for the Eatfuti Tailwind v4 + shadcn/ui setup.
 *
 * Styling lives entirely in `event-banner.module.css` (CSS Module + @apply).
 * Animation uses **Framer Motion** (`motion/react`) — the design system's
 * standard animation framework — pulling timing from the shared brand presets
 * in `@/lib/motion`. This file only wires structure, props, and behaviour.
 * `cn()` merges the module classes with any `className` passed in, and lets
 * shadcn's <Button> utility classes win where they overlap.
 *
 * Dependencies (already covered by `tailwind/README.md` quick-start):
 *   npm i motion lucide-react
 *   npx shadcn@latest add button
 *
 * Place above your sticky <SiteHeader/> so it scrolls away on scroll.
 */

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { transition } from "@/lib/motion";
import styles from "./event-banner.module.css";

export interface EventBannerProps {
  /** Stable key — change to re-show the banner after copy edits. */
  storageKey?: string;
  /** Short label that sits in front of the message in uppercase gold. */
  eyebrow?: string;
  /** Main message. */
  message?: string;
  /** Booth number (rendered as a gold mono chip). Omit to hide. */
  booth?: string;
  /** CTA link target. */
  ctaHref?: string;
  /** CTA label. */
  ctaLabel?: string;
  /** Extra classes on the outer bar. */
  className?: string;
}

export function EventBanner({
  storageKey = "eft-banner-nra-2026",
  eyebrow = "We're showing",
  message = "Find Eatfuti at the National Restaurant Association Show",
  booth = "#8308",
  ctaHref = "#",
  ctaLabel = "Plan a visit",
  className,
}: EventBannerProps) {
  // Start hidden on the server and during hydration so we don't flash the banner
  // for users who've already dismissed it.
  const [mounted, setMounted] = React.useState(false);
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    try {
      if (localStorage.getItem(storageKey)) setVisible(false);
    } catch {}
    setMounted(true);
  }, [storageKey]);

  const dismiss = React.useCallback(() => {
    try { localStorage.setItem(storageKey, "1"); } catch {}
    setVisible(false);
  }, [storageKey]);

  return (
    <AnimatePresence initial={false}>
      {mounted && visible && (
        <motion.div
          role="region"
          aria-label="Event announcement"
          className={cn(styles.bar, className)}
          // Slide-down reveal on enter, collapse-up on dismiss. Height animates
          // so the page content below settles into place rather than jumping.
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1, transition: transition.base }}
          exit={{ height: 0, opacity: 0, transition: transition.exit }}
          style={{ overflow: "hidden" }}
        >
          <div className={styles.row}>
            {/* Gold squircle badge */}
            <span aria-hidden="true" className={styles.badge}>
              <MapPin className={styles.badgeIcon} strokeWidth={2} />
            </span>

            {/* Message */}
            <p className={styles.message}>
              <span className={styles.eyebrow}>{eyebrow}</span>
              <span className={styles.messageText}>{message}</span>

              {booth && (
                <>
                  <span aria-hidden="true" className={styles.separator}>·</span>
                  <span className={styles.boothWrap}>
                    <span className={styles.boothLabel}>Booth</span>
                    <span className={styles.boothChip}>{booth}</span>
                  </span>
                </>
              )}
            </p>

            {/* CTA + dismiss */}
            <div className={styles.actions}>
              <Button asChild variant="outline" size="sm" className={styles.cta}>
                <a href={ctaHref}>
                  {ctaLabel}
                  <ArrowRight className={styles.ctaIcon} strokeWidth={2} />
                </a>
              </Button>

              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={dismiss}
                aria-label="Dismiss announcement"
                className={styles.dismiss}
              >
                <X className={styles.dismissIcon} strokeWidth={2.25} />
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default EventBanner;
