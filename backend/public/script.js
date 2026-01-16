fetch("/API/NINFA")
  .then(res => res.json())
  .then(zeus => {
    document.getElementById("nombre").textContent = zeus.nombre;
    document.getElementById("titulo").textContent = zeus.titulo;
    document.getElementById("descripcion").textContent = zeus.descripcion;

    zeus.dominio.forEach(d => {
      const li = document.createElement("li");
      li.textContent = d;
      document.getElementById("dominio").appendChild(li);
    });

    zeus.simbolos.forEach(s => {
      const li = document.createElement("li");
      li.textContent = s;
      document.getElementById("simbolos").appendChild(li);
    });

    document.getElementById("padres").textContent =
      zeus.familia.padres.join(", ");

    document.getElementById("hermanos").textContent =
      zeus.familia.hermanos.join(", ");

    document.getElementById("esposa").textContent =
      zeus.familia.esposa;

    zeus.familia.hijos_destacados.forEach(h => {
      const li = document.createElement("li");
      li.textContent = h;
      document.getElementById("hijos").appendChild(li);
    });
  })
  .catch(err => console.error("Error:", err));
