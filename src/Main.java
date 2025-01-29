import Entities.Tarefa;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Scanner;

public class Main {

    public static Scanner sc = new Scanner(System.in);
    public static SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy HH:mm");


    public static void main(String[] args)  {

        ArrayList<Tarefa> lista = new ArrayList<Tarefa>();
        int opcao = 0;

        while(opcao != 4){
            opcao = menu(lista);
        }

    }
    public static int menu(ArrayList<Tarefa> lista)  {
        int opc = 0;
        System.out.println("1 - Adicionar nova tarefa");
        System.out.println("2 - Remover tarefa");
        System.out.println("3 - Listar tarefa");
        System.out.println("4 - Sair");
        System.out.print("Escolha uma opção: ");
        opc = sc.nextInt();

        System.out.println(" ");
        int opcao = 0;
        switch(opc){
            case 1:
                adicionar(lista);
                opcao = 1;
                break;
            case 3:
                listar(lista);
                opcao = 3;
                break;
            case 4:
                System.out.print("Tchau!");
                opcao = 4;
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
            System.out.print("Status: ");
            String status = sc.nextLine();
            System.out.println(" ");
            Tarefa tarefa = new Tarefa(nome, descricao, data, prioridade, categoria, status);
            lista.add(tarefa);
        }
    }

    public static void listar(ArrayList<Tarefa> lista)  {
        for(Tarefa tarefa : lista){
            System.out.println(tarefa);
            System.out.println(" ");
        }
    }
}