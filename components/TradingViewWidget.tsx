"use client";

import { cn } from "@/lib/utils";
import { memo } from "react";
import useTradingViewWidgets from "./hooks/useTradingViewWidgets";

interface TradingViewWidgetProps {
  title?: string;
  scriptUrl: string;
  config: Record<string, unknown>;
  height?: number;
  className?: string;
}

/**
 * Renders a container for a TradingView widget and an optional title.
 *
 * @param title - Optional header text displayed above the widget.
 * @param scriptUrl - URL of the TradingView script to load into the container.
 * @param config - Configuration object forwarded to the TradingView widget initializer.
 * @param height - Height of the widget area in pixels (defaults to 600).
 * @param className - Additional CSS class names applied to the outer widget container.
 * @returns The component's rendered JSX element containing the widget container and optional title.
 */
function TradingViewWidget({
  title,
  scriptUrl,
  config,
  height = 600,
  className,
}: TradingViewWidgetProps) {
  const containerRef = useTradingViewWidgets(scriptUrl, config, height);

  return (
    <div className="w-full">
      {title && (
        <h3 className="font-semibold text-2xl text-gray-100 mb-5">{title}</h3>
      )}
      <div
        className={cn("tradingview-widget-container", className)}
        ref={containerRef}
      >
        <div
          className="tradingview-widget-container__widget"
          style={{ height, width: "100%" }}
        />
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
