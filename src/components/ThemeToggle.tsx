"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render a placeholder or null on the server/initial client render
    // to avoid hydration mismatch, as theme is resolved on client.
    // Match navbar button size for consistency if it's visible before mount.
    return <Button variant="outline" size="icon" disabled className="h-9 w-9 md:h-10 md:w-10" />;
  }

  return (
    <Button
      variant="outline"
      size="icon"
      className="h-9 w-9 md:h-10 md:w-10" // Consistent with Menu button in Navbar
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      )}
    </Button>
  );
}
