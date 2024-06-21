"use client";

import { ColumnDef } from "@tanstack/react-table";
import { TrashIcon, InfoIcon, PencilIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Transaction = {
  id: number;
  situation: "completa" | "pendente" | "cancelada";
  date: string;
  description: string;
  category: string;
  account: string;
  amount: number;
};

export const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "situation",
    header: "Situação",
  },
  {
    accessorKey: "date",
    header: "Data",
  },
  {
    accessorKey: "description",
    header: "Descrição",
  },
  {
    accessorKey: "category",
    header: "Categoria",
  },
  {
    accessorKey: "account",
    header: "Conta",
  },
  {
    accessorKey: "amount",
    header: "Valor",
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(price);

      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    id: "actions",
    header: () => <div className="text-center">Ações</div>,
    cell: ({ row }) => {
      return (
        <div className="flex justify-center">
          <Button variant="ghost" size="icon">
            <PencilIcon className="h-4 w-4 text-green-600" />
          </Button>
          <Button variant="ghost" size="icon">
            <InfoIcon className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <TrashIcon className="h-4 w-4 text-red-600" />
          </Button>
        </div>
      );
    },
  },
];
