// Função assíncrona que busca produtos, podendo filtrar pelo termo de busca (searchTerm)
const fetchProducts = async (searchTerm = '') => {
  // Faz uma requisição para a API Fake Store para pegar todos os produtos
  const response = await fetch('https://fakestoreapi.com/products/')
  
  // Converte a resposta da API para JSON (um array de produtos)
  const data = await response.json()

  // Se não foi passado nenhum termo para busca, retorna todos os produtos
  if (!searchTerm) return data;

  // Caso haja termo de busca, filtra o array retornado para conter apenas
  // os produtos cujo título (title) contém o termo pesquisado, ignorando maiúsculas/minúsculas
  return data.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
}

// Exporta a função para ser usada em outros arquivos
export default fetchProducts;
