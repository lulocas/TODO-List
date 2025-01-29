import Entities.Tarefa;

import java.util.ArrayList;
import java.util.Scanner;

public class Main {

    public static Scanner sc = new Scanner(System.in);

    public static void main(String[] args)  {

        ArrayList<Tarefa> lista = new ArrayList<Tarefa>();
        int opcao = 0;

        while(opcao != 6){
            opcao = menu(lista);
        }

    }
    public static int menu(ArrayList<Tarefa> lista)  {
        int opc = 0;
        System.out.println("1 - Adicionar nova tarefa");
        System.out.println("2 - Remover tarefa");
        System.out.println("3 - Listar tarefa");
        System.out.println("4 - Atualizar tarefa");
        System.out.println("5 - Consultar quantidade de tarefa");
        System.out.println("6 - Sair");
        System.out.print("Escolha uma opção: ");
        opc = sc.nextInt();

        System.out.println(" ");
        int opcao = 0;
        switch(opc){
            case 1:
                adicionar(lista);
                opcao = 1;
                break;
            case 2:
                remover(lista);
                opcao = 2;
                break;
            case 3:
                listar(lista);
                opcao = 3;
                break;
            case 4:
                atualizar(lista);
                opcao = 4;
                break;
            case 5:
                consultar(lista);
                opcao = 5;
                break;
            case 6:
                System.out.print("Tchau!");
                opcao = 6;
                break;
            default:
                System.out.println("Opção inválida");
                opcao = 0;
                break;
        }
         return opcao;
    }

    public static void adicionar(ArrayList<Tarefa> lista) {
        System.out.print("Quantas tarefas quer adicionar: ");
        int qtd = sc.nextInt();
        sc.nextLine();

        System.out.println(" ");

        for(int i = 0; i < qtd; i++){
            System.out.print("Nome da tarefa: ");
            String nome = sc.nextLine();
            System.out.print("Data de término da tarefa (dd/MM/yyyy HH:mm): ");
            String data = sc.nextLine();
            System.out.print("Descrição: ");
            String descricao = sc.nextLine();
            System.out.print("Prioridade (1-5): ");
            int prioridade = sc.nextInt();
            sc.nextLine();
            System.out.print("Categoria: ");
            String categoria = sc.nextLine();
            System.out.print("Status (todo, doing, done): ");
            String status = sc.nextLine();
            System.out.println(" ");
            Tarefa tarefa = new Tarefa(nome, descricao, data, prioridade, categoria, status);
            lista.add(tarefa);
        }
    }

    public static void remover(ArrayList<Tarefa> lista) {
        System.out.print("Quantas tarefas quer remover: ");
        int qtd = sc.nextInt();
        sc.nextLine();
        System.out.println(" ");

        for(Tarefa tarefa : lista){
            System.out.println(tarefa);
            System.out.println(" ");
        }

        for(int i = 0; i < qtd; i++){
            System.out.print("Nome da tarefa: ");
            String nome = sc.nextLine();
            for(Tarefa tarefa : lista){
                if(tarefa.getNome().equalsIgnoreCase(nome)){
                    lista.remove(tarefa);
                    System.out.println("Tarefa removida!");
                    break;
                }
            }

            System.out.println(" ");
        }
    }

    public static void listar(ArrayList<Tarefa> lista)  {
        System.out.println("1 - Listar por categoria");
        System.out.println("2 - Listar por prioriade");
        System.out.println("3 - Listar por status");
        System.out.print("Escolha uma opção: ");
        int opcao = sc.nextInt();
        sc.nextLine();
        System.out.println(" ");

        switch(opcao){
            case 1:
                listarCategoria(lista);
                break;
            case 2:
                listarPrioriade(lista);
                break;
            case 3:
                listarStatus(lista);
                break;
            default:
                System.out.println("Opção inválida");
                break;
        }

    }

    public static void listarCategoria(ArrayList<Tarefa> lista)  {
        System.out.print("Qual categoria deseja listar: ");
        String categoria = sc.nextLine();

        System.out.println(categoria + ":");
        for(Tarefa tarefa : lista){
            if(tarefa.getCategoria().equalsIgnoreCase(categoria)){
                System.out.println(tarefa);
                System.out.println(" ");
            }
        }
    }

    public static void listarPrioriade(ArrayList<Tarefa> lista)  {
        System.out.println("Prioridade 5:");
        for(Tarefa tarefa : lista){
            if(tarefa.getPrioridade() == 5){
                System.out.println(tarefa);
                System.out.println(" ");
            }
        }
        System.out.println(" ");

        System.out.println("Prioridade 4:");
        for(Tarefa tarefa : lista){
            if(tarefa.getPrioridade() == 4){
                System.out.println(tarefa);
                System.out.println(" ");
            }
        }
        System.out.println(" ");

        System.out.println("Prioridade 3:");
        for(Tarefa tarefa : lista){
            if(tarefa.getPrioridade() == 3){
                System.out.println(tarefa);
                System.out.println(" ");
            }
        }
        System.out.println(" ");

        System.out.println("Prioridade 2:");
        for(Tarefa tarefa : lista){
            if(tarefa.getPrioridade() == 2){
                System.out.println(tarefa);
                System.out.println(" ");
            }
        }
        System.out.println(" ");

        System.out.println("Prioridade 1:");
        for(Tarefa tarefa : lista){
            if(tarefa.getPrioridade() == 1){
                System.out.println(tarefa);
                System.out.println(" ");
            }
        }
        System.out.println(" ");
    }

    public static void listarStatus(ArrayList<Tarefa> lista)  {
        System.out.println("ToDo:");
        for(Tarefa tarefa : lista){
            if(tarefa.getStatus().equalsIgnoreCase("todo")){
                System.out.println(tarefa);
                System.out.println(" ");
            }
        }
        System.out.println(" ");

        System.out.println("Doing:");
        for(Tarefa tarefa : lista){
            if(tarefa.getStatus().equalsIgnoreCase("doing")){
                System.out.println(tarefa);
                System.out.println(" ");
            }
        }
        System.out.println(" ");

        System.out.println("Done:");
        for(Tarefa tarefa : lista){
            if(tarefa.getStatus().equalsIgnoreCase("done")){
                System.out.println(tarefa);
                System.out.println(" ");
            }
        }
        System.out.println(" ");
    }

    public static void atualizar(ArrayList<Tarefa> lista)  {
        for(Tarefa tarefa : lista){
            System.out.println(tarefa);
            System.out.println(" ");
        }

        System.out.print("Qual nome da tarefa que deseja atualizar: ");
        String nome = sc.nextLine();
        sc.nextLine();
        System.out.println(" ");

        int i = 0;

        Tarefa tarefaAtual = new Tarefa();
        for (Tarefa tarefa : lista) {
            if (tarefa.getNome().equalsIgnoreCase(nome)) {
                tarefaAtual = tarefa;
                System.out.println(tarefa);
                i = lista.indexOf(tarefa);
                System.out.println(" ");
                break;
            }
        }

        if (tarefaAtual == null) {
            System.out.println("Tarefa não encontrada.");
            return;
        }

        String aux = "s";

        while(aux.equals("s")){
            System.out.println("1 - Nome");
            System.out.println("2 - Descrição");
            System.out.println("3 - Data");
            System.out.println("4 - Prioridade");
            System.out.println("5 - Categoria");
            System.out.println("6 - Status");
            System.out.println("O que deseja atualizar: ");
            int opcao = sc.nextInt();
            sc.nextLine();

            switch(opcao){
                case 1:
                    System.out.print("Novo nome: ");
                    tarefaAtual.setNome(sc.nextLine());
                    System.out.println("Nome atualizado com sucesso!");
                    break;
                case 2:
                    System.out.print("Nova descricao: ");
                    tarefaAtual.setDescricao(sc.nextLine());
                    System.out.println("Descrição atualizado com sucesso!");
                    break;
                case 3:
                    System.out.print("Nova data: ");
                    tarefaAtual.setData(sc.nextLine());
                    System.out.println("Data atualizada com sucesso!");
                    break;
                case 4:
                    System.out.print("Nova prioridade: ");
                    tarefaAtual.setPrioridade(sc.nextInt());
                    sc.nextLine();
                    System.out.println("Prioridade atualizada com sucesso!");
                    break;
                case 5:
                    System.out.print("Nova categoria: ");
                    tarefaAtual.setCategoria(sc.nextLine());
                    System.out.println("Categoria atualizada com sucesso!");
                    break;
                case 6:
                    System.out.print("Novo status: ");
                    tarefaAtual.setStatus(sc.nextLine());
                    System.out.println("Status atualizado com sucesso!");
                    break;
                default:
                    System.out.println("Opção inválida.");
                    break;
            }

            lista.set(i, tarefaAtual);

            System.out.println(" ");
            System.out.println("Deseja atualizar mais alguma coisa da tarefa? (s/n) ");
            aux = sc.nextLine();
        }

    }


    public static void consultar(ArrayList<Tarefa> lista)  {
        int doing = 0;
        int done = 0;
        int todo = 0;

        for(Tarefa tarefa : lista){
            if(tarefa.getStatus().equalsIgnoreCase("done")){
                done++;
            }else if(tarefa.getStatus().equalsIgnoreCase("doing")){
                doing++;
            }else if(tarefa.getStatus().equalsIgnoreCase("todo")){
                todo++;
            }
        }

        System.out.println("ToDo: " + todo + " tarefas");
        System.out.println("Doing: " + doing + " tarefas");
        System.out.println("Done: " + done + " tarefas");
        System.out.println(" ");
    }
}