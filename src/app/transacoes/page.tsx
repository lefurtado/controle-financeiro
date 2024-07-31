import { columns, Transaction } from "./columns";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DataTable } from "@/components/ui/data-table";
import { PlusIcon } from "lucide-react";
import FormTransaction from "@/components/core/form-transaction";

async function getData(): Promise<Transaction[]> {
  // Fetch data from your API here.
  return [
    {
      id: 1,
      situation: "completa",
      date: "2024-06-01",
      description: "Compra no supermercado",
      category: "Alimentação",
      account: "Cartão de Crédito",
      amount: 150.75,
    },
    {
      id: 2,
      situation: "pendente",
      date: "2024-06-03",
      description: "Pagamento de conta de luz",
      category: "Despesas Fixas",
      account: "Conta Corrente",
      amount: 85.2,
    },
    {
      id: 3,
      situation: "completa",
      date: "2024-06-05",
      description: "Aluguel",
      category: "Moradia",
      account: "Conta Corrente",
      amount: 1200.0,
    },
    {
      id: 4,
      situation: "cancelada",
      date: "2024-06-07",
      description: "Assinatura de streaming",
      category: "Lazer",
      account: "Cartão de Crédito",
      amount: 29.9,
    },
    {
      id: 5,
      situation: "completa",
      date: "2024-06-10",
      description: "Compra de roupas",
      category: "Vestuário",
      account: "Cartão de Crédito",
      amount: 250.5,
    },
    {
      id: 6,
      situation: "pendente",
      date: "2024-06-12",
      description: "Consulta médica",
      category: "Saúde",
      account: "Conta Corrente",
      amount: 180.0,
    },
    {
      id: 7,
      situation: "completa",
      date: "2024-06-15",
      description: "Manutenção do carro",
      category: "Transporte",
      account: "Conta Corrente",
      amount: 500.0,
    },
    {
      id: 8,
      situation: "pendente",
      date: "2024-06-18",
      description: "Compra de livros",
      category: "Educação",
      account: "Cartão de Crédito",
      amount: 120.0,
    },
    {
      id: 9,
      situation: "completa",
      date: "2024-06-20",
      description: "Jantar em restaurante",
      category: "Lazer",
      account: "Cartão de Crédito",
      amount: 200.0,
    },
    {
      id: 10,
      situation: "pendente",
      date: "2024-06-22",
      description: "Pagamento de academia",
      category: "Saúde",
      account: "Conta Corrente",
      amount: 75.0,
    },
  ];
}

export default async function Estoque() {
  const data = await getData();
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Transações</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex flex-col sm:items-center sm:flex-row justify-between mb-4">
        <h2 className="mt-5 text-4xl font-semibold">Transações</h2>
        <Dialog>
          <Button asChild>
            <DialogTrigger>
              <PlusIcon className="mr-2 h-4 w-4" />
              Nova transação
            </DialogTrigger>
          </Button>
          <DialogContent className="sm:max-w-[425px] max-w-xs rounded-xl">
            <DialogHeader>
              <DialogTitle>Adicionar transação</DialogTitle>
              <DialogDescription>
                Formulário para adicionar nova transação
              </DialogDescription>
            </DialogHeader>
            <FormTransaction />
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
