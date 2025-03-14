// chamadas da integração para dialogar com o banco de dados

package com.example.api.repository;

import com.example.api.model.Produto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProdutoRepository extends JpaRepository<Produto, Long> {
}
