import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-16">
      <div className="max-w-lg space-y-3 text-center">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">
          Controle de Despesas
        </h1>
        <p className="text-muted-foreground leading-relaxed">
          Bootstrap da aplicação full-stack. As funcionalidades de conta,
          despesas e resumo serão entregues nos próximos marcos.
        </p>
      </div>
      <Button type="button" variant="outline">
        Em breve
      </Button>
    </main>
  );
}
