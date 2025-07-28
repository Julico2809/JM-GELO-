
const SUPABASE_URL = "https://ivezfuuveqljpsfwsfjd.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml2ZXpmdXV2ZXFsanBzZndzZmpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM2NTk4MzksImV4cCI6MjA2OTIzNTgzOX0.d9Jsed3Fylwh5f4CuGqO1roqsjUplGomehFLlyM-ssU";
const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function carregarProdutos() {
  const lista = document.getElementById("listaProdutos");
  lista.innerHTML = "";

  const { data, error } = await _supabase.from("produtos").select("*").order("nome", { ascending: true });

  if (error) {
    alert("Erro ao carregar produtos: " + error.message);
    return;
  }

  data.forEach((produto) => {
    const item = document.createElement("li");
    item.textContent = `${produto.nome} - R$ ${parseFloat(produto.preco).toFixed(2)}`;
    lista.appendChild(item);
  });
}

async function adicionarProduto() {
  const nome = document.getElementById("nomeProduto").value;
  const preco = parseFloat(document.getElementById("precoProduto").value);

  const { data, error } = await _supabase.from("produtos").insert([{ nome, preco }]);

  if (error) {
    alert("Erro ao adicionar produto: " + error.message);
  } else {
    document.getElementById("formProduto").reset();
    carregarProdutos();
  }
}

window.onload = carregarProdutos;
