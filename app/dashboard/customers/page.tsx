import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/variants/card';

export default function CustomersPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Clientes</CardTitle>
        <CardDescription>Ver todos os clientes e seus pedidos.</CardDescription>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  );
}
