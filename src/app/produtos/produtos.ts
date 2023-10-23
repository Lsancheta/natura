//**************************************AVISO PARA O USUARIO DO SITE************************ */
// lista de produtos que serão oferecidos a venda, siga a ordem escrita a seguir
// { id: 999 , nome: 'laranja', preco: 5.99, estoque: true, tipo: 'natural', imagem: 'assets/imagensProdutos/produto1.jpg', descricao: 'descricao da laranja'},  essa virgula final deve ser colocada após o fechamento da chave!!
// a parte onde esta escrito estoque:true pode ser alterada por estoque:false, se o estoque for true, voce tem o produto em pronta entrega, se for false, mostrará para o cliente que não tem o produto em mãos

export const produtos = [
    {
        id: 1, 
        nome: 'Granola', 
        preco: 15.60, 
        estoque: true, 
        tipo: 'natural', 
        imagem: 'assets/imagensProdutos/granolaPura.jpg', 
        descricao: 'Os principais benefícios da granola incluem: fornecimento de energia, melhora da saúde digestiva, promoção da saciedade, controle do colesterol, e fornecimento de nutrientes essenciais. A granola é uma ótima companheira na alimentação saudável que acompanha a rotina de pessoas ao redor de todo o mundo.',
        infoPeso: '1.01 Kg',
        composicao: 'Granola, Uva Passa, Aveia, Farelo de Trigo, Floco de Arroz, Floco de Milho e Castanha',
        comoUsar: 'Adicione a granola no seu café da manhã, consuma junto de leite ou iogurte, ou faça uma salada de frutas e adicone a Granola a gosto.',
        tipo_de_produto: 'Grãos',
        indicacao: 'Contra indicado para Diabéticos'
    },
    {
        id: 2,
        nome: 'Whey Protein',
        preco: 80.00,
        estoque: true,
        tipo: 'suplemento',
        imagem: 'assets/imagensProdutos/whey.jpg',
        descricao: 'Um dos suplementos fabricados com tecnologia mais avançada na indústria alimentícia vem sendo largamente utilizado pela nutrição esportiva e até mesmo no tratamento médico, o Whey Protein Hidrolisado é um dos campeões de venda da Growth Supplements.',
        infoPeso: '1 Kg',
        composicao: 'Rico em Aminoácidos, Excelente concentração de Proteína',
        comoUsar: 'O melhor momento para se tomar seu WHey Protein é após o treino para ganho de massa magra. Consumir logo após o treino ajuda a neutralizar os efeitos do catabolismo, trazendo resultados significativos para a hipertrofia dos músculos.',
        tipo_de_produto: 'Pó',
        indicacao: 'Todos'
    },
    {
        id: 3,
        nome: 'Creatina',
        preco: 90.99,
        estoque: false,
        tipo: 'suplemento',
        imagem: 'assets/imagensProdutos/creatina.jpg',
        descricao: 'A suplementação com Creatina Hardcore Integralmédica auxilia no aumento dos estoques e no armazenamento da creatina dentro do músculo, o que é fundamental para a produção da energia usada na contração muscular.',
        infoPeso: '300 g',
        composicao: 'Creatina',
        comoUsar: 'A creatina é um suplemento de uso contínuo, por isso pode ser consumida á qualquer momento do dia, todos os dias, até mesmo nos dias de descanso onde não são realizados treinamentos.',
        tipo_de_produto: 'pó',
        indicacao: 'Todos'
    },
    {
        id: 4,
        nome: 'Tofu',
        preco: 15.50,
        estoque: true,
        tipo: 'natural',
        imagem: 'assets/imagensProdutos/tofu.jpg',
        descricao: 'Tofu é um alimento produzido a partir da soja. Tem uma textura firme parecida com a do queijo e serve como outra alternativa para carne, tendo sabor delicado. Ele possui cor branca cremosa e apresenta-se normalmente sob a forma de blocos.',
        infoPeso: '250 g',
        composicao: 'Calorias: 76, Gorduras Totais: 4,8g, Gorduras Saturadas: 0,7g, Colesterol: 0 mg, Sódio: 7 mg, Potássio 121 mg, carboidratos 1,9g, Fibra Alimentar: 0,3g, \nProteínas 8 g',
        comoUsar: 'Frite igual a um bife',
        tipo_de_produto: 'Gelatinoso',
        indicacao: 'Todos'
    },
    {
        id: 5,
        nome: 'Macarrão integral Espaguete nº 8',
        preco: 19.99,
        tipo:'natural',
        estoque: true,
        imagem: 'assets/imagensProdutos/macarraoIntegral.jpg',
        descricao: 'O Macarrão Integral Espaguete N°8 Grano Duro Renata é elaborado com uma seleção de sêmola de grano duro importada e, por isso, seu resultado é tão superior: sempre “al dente” e com maior aderência dos molhos.',
        infoPeso: '500g',
        composicao: '',
        comoUsar: '',
        tipo_de_produto: 'Pasta',
        indicacao: 'Alérgicos: Contém derivados de trigo e de ovos, Contém Glúten.'
    },
    {
        id: 6,
        nome: 'Mel',
        preco: 10.00,
        estoque: false,
        tipo:'natural',
        imagem: 'assets/imagensProdutos/mel.jpg',
        descricao: 'Mel da florada Silvestre ( Flores do Campo): Mel multifloral, possui coloração âmbar, densidade variável de acordo com a época do ano e sabor encorpado. É o tipo mais comum de mel, e também um dos mais vendidos.',
        infoPeso: '260 g',
        composicao: '',
        comoUsar: 'Goteje a quantidade a desejar, cuidado para não adocicar demais',
        tipo_de_produto: 'Líquido / Viscoso',
        indicacao: 'Contra indicado para Diabéticos'
    },
]