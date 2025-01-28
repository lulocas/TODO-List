import Entities.Tarefa;

import java.util.ArrayList;
import java.util.Scanner;

public class Main {

    public static Scanner sc = new Scanner(System.in);

    public static void main(String[] args) {

        ArrayList<Tarefa> lista = new ArrayList<Tarefa>();

    }
    public void menu(){
        int opc = 0;
        System.out.println("1 - Adicionar nova tarefa");
        System.out.println("2 - Remover tarefa");
        System.out.println("3 - Listar tarefa");
        System.out.println("Escolha uma opção: ");
        opc = sc.nextInt();
        
    }

    public void adicionar(ArrayList<Tarefa> lista){
        System.out.print("Quantas tarefas quer adicionar: ");
        int qtd = sc.nextInt();
        for(int i = 0; i < qtd; i++){
            System.out.print("Nome da tarefa: ");
            String nome = sc.next();
            System.out.print("Descrição: ");
            String descricao = sc.next();

        }
    }
}