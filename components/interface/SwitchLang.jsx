import React from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function SwitchLang() {
  return (
    <>
      <div className="flex items-center gap-3">
        <Switch id="airplane-mode" onCheckedChange={(e) => console.log(e)} />
        <Label htmlFor="airplane-mode" className="font-bold">
          AR
        </Label>
      </div>
    </>
  );
}
