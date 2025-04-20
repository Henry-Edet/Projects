// components/DownloadCvButton.tsx
'use client';

import { Button } from "@/components/ui/button";
import { Download, Loader2 } from "lucide-react";
import { useState } from "react";

export function DownloadCvButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = () => {
    setIsLoading(true);
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/files/Henry_Edet_CV.pdf`; // Adjust the path as necessary
      link.download = 'Henry_Edet_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setIsLoading(false);
    }, 500); // Simulate network delay
  };

  return (
    <Button
      variant="outline"
      onClick={handleDownload}
      disabled={isLoading}
      className="gap-2"
    >
      {isLoading ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        <Download className="h-4 w-4" />
      )}
      {isLoading ? "Preparing..." : "Download CV"}
    </Button>
  );
}