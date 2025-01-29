package Entities;

import java.text.SimpleDateFormat;
import java.util.Date;

public class Tarefa {

    private String nome;
    private String descricao;
    private String data;
    private int prioridade;
    private String categoria;
    private String status;

    public Tarefa(String nome, String descricao, String data, int prioridade, String categoria, String status) {
        this.nome = nome;
        this.descricao = descricao;
        this.data = data;
        this.prioridade = prioridade;
        this.categoria = categoria;
        this.status = status;
    }
    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }
    public String getDescricao() {
        return descricao;
    }
    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }
    public String getData() {
        return data;
    }
    public void setData(String data) {
        this.data = data;
    }
    public int getPrioridade() {
        return prioridade;
    }
    public void setPrioridade(int prioridade) {
        this.prioridade = prioridade;
    }
    public String getCategoria() {
        return categoria;
    }
    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }
    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }

    public String toString() {
        return "Tarefa: " + nome
        + "\nDescricao: " + descricao
        + "\nData: " + data
        + "\nPrioridade: " + prioridade
        + "\nCategoria: " + categoria
        + "\nStatus: " + status;
    }
}
