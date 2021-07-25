import { SiteClient } from "datocms-client";

export default async function requestReceivers(request, response) {
  if (request.method === 'POST') {
    const TOKEN = "f69df4a9ba72dbda720f5c129768a5";
    const client = new SiteClient(TOKEN);
  
    // Validar os dados, antes de sair cadastrando
    const registroCriado = await client.items.create({
      itemType: "967993",
      ...request.body,
    });
  
    response.json({
      registroCriado: registroCriado,
    });
    return
  }

  response.status(404).json({
    message: 'deu ruim'
  })
}