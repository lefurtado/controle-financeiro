import * as React from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function FormTransaction() {
  return (
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="description" className="text-right">
          Descrição
        </Label>
        <Input id="description" value="" className="col-span-3" />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="date" className="text-right">
          Data
        </Label>
        <Input id="date" value="" className="col-span-3" />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="category" className="text-right">
          Categoria
        </Label>
        <Input id="category" value="" className="col-span-3" />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="account" className="text-right">
          Conta
        </Label>
        <Input id="account" value="" className="col-span-3" />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="amount" className="text-right">
          Valor
        </Label>
        <Input id="amount" value="" className="col-span-3" />
      </div>
    </div>
  );
}
