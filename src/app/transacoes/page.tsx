import { columns, Transaction } from "./columns";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { DataTable } from "@/components/ui/data-table";
import DialogNewTransaction from "@/components/core/dialog-new-transaction";

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
      <DialogNewTransaction />
      <DataTable columns={columns} data={data} />
    </div>
  );
}
