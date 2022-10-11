//clase para almacenar los prestamos
class Prestamos {
    constructor(
      NombreApellido,
      Monto,
      Cuota,
      ModoPago,
      Id,
      FechaFinalizacion,
      Total,
      NroCuota
    ) {
      (this.NombreApellido = NombreApellido),
        (this.Monto = parseFloat(Monto)),
        (this.Cuota = parseFloat(Cuota)),
        (this.ModoPago = ModoPago),
        (this.Id = Id),
        (this.FechaFinalizacion = FechaFinalizacion),
        (this.Total = Total),
        (this.NroCuota = NroCuota);
    }
  
    IdPrestamos(array) {
      this.Id = array.length;
    }
  
    TotalPrestamos(Pres) {
      let Mitotal = 0;
  
      //console.log (Pres);
  
      //console.log ("Estoy dentro del TotalPrestamos");
  
      switch (Pres.ModoPago) {
        case "S":
          //console.log("Tipo S",Pres.Monto * 1,65, Pres.Monto * 1.65 );
  
          Pres.Total = Pres.Monto * 1.65;
          Pres.Cuota = Pres.Total / 16;
          Pres.NroCuota = 16;
          break;
        case "M":
          Pres.Total = Pres.Monto * 1.55;
          Pres.Cuota = Pres.Total / 8;
          Pres.NroCuota = 8;
          break;
        case "Q":
          Pres.Total = Pres.Monto * 1.6;
          Pres.Cuota = Pres.Total / 12;
          Pres.NroCuota = 12;
          break;
        default:
          Pres.Total = Pres.Monto * 1.65;
          Pres.Cuota = Pres.Total / 16;
          Pres.NroCuota = 16;
          break;
      }
    }
  
    calcularFechas(Pres) {
      let miDia = new Date();
      let semanas = 0;
  
      switch (Pres.ModoPago) {
        case "S":
          semanas = Pres.NroCuota * 7;
          break;
  
        case "M":
          semanas = Pres.NroCuota * 4;
          break;
        case "Q":
          semanas = Pres.NroCuota * 2;
          break;
  
        default:
          break;
      }
  
      miDia.setDate(miDia.getDate() + semanas);
  
      let mes = (miDia.getMonth() +1).toString() ;
      let dia = miDia.getDate().toString();
  
      console.log ( "mi mes", dia,   mes);
  
      if (dia.length ==1 ){ dia = "0" + dia}
      if (mes.length ==1 ){ mes = "0" + mes}
  
      Pres.FechaFinalizacion = dia  + "/" +    mes  + "/" +     miDia.getFullYear();
  
  //    console.log(miDia, miDia.getDate() + "/" +     (miDia.getMonth()+1) + "/" +     miDia.getFullYear());
  //console.log(miDia, dia  + "/" +    mes  + "/" +     miDia.getFullYear());
    }
  }
  
  //Array para tener valores de referencia
  const misPrestamos = [
    new Prestamos("Patricia Marquez", 10000, 2500, "Q", 1, "22/10/2023", 15000),
    new Prestamos("Fernando Aguirre", 25000, 9500, "M", 2, "25/10/2023", 30000),
    new Prestamos("Carolina Mendoza", 42000, 6500, "S", 3, "27/10/2023", 52000),
    new Prestamos(
      "Florencia Achaval",
      450000,
      45000,
      "S",
      4,
      "10/10/2023",
      500000
    ),
    new Prestamos("Hector Gonzalez", 25000, 2500, "S", 5, "12/10/2023", 30000),
    new Prestamos("Hector Gonzalez", 78000, 6500, "Q", 6, "14/10/2023", 94000),
    new Prestamos("Juan Gonzalez", 25000, 2500, "S", 7, "16/10/2023", 30000),
    new Prestamos("Juan Perez", 39000, 2500, "S", 8, "16/10/2023", 54000),
    new Prestamos("Rogelio Mendoza", 67800, 6900, "S", 9, "25/10/2023", 95000),
  ];
  
  let Entrada = "";
  
  //Bucle principal
  while (Entrada != "Q") {
    let Mensaje = prompt(
      "Ingrese el modo de operar. \n 1.Cliente \n 2.Administrador \n \n Ingrese Q para salir."
    );
  
    if (Mensaje.toUpperCase() == "Q") {
      Entrada = "Q";
      //    console.log(Entrada);
      break;
    }
    if ((Mensaje = "1")) {
      operacionesUsuario();
    }
    if ((Mensaje = "2")) {
      console.log("2");
    }
  }
  
  //Todas las operaciones del usuario
  function operacionesUsuario() {
    let salida = true;
    let Mensaje = "";
  
    while (salida) {
      Mensaje = prompt(
        "Ingrese la operacion a realizar. \n 1.Pedir un Prestamo \n 2.Ver todos sus prestamos \n 3.Ordenar prestamos por monto ascendente \n 4.Ordenar prestamos por monto descendente \n 5. Total Deuda \n \n Ingrese Q para volver al menu anterior. "
      );
  
      console.log(Mensaje);
      let datos = "";
  
      if (Mensaje === "Q") {
        salida = false;
        break;
      }
  
      if (Mensaje == "1") {
        console.log("Selecciono la opcion 1 ");
  
        pedirPrestamo();
        //   salida = true;
        //   break;
      }
    }
  }
  
  //La seleccion nro 1 , ingresar prestamos
  function pedirPrestamo() {
    console.log("Estoy en la funcion pedirPrestamo");
  
    let salida = true;
  
    while (salida) {
      let datos = prompt(
        "Por favor ingrese los datos separados por un guion del medio(-) \n Nombre y Apellido \n Monto \n Cuota \n Modo de Pago \n \n Ingrese Q para volver al menu anterior"
      );
  
      if (datos === "Q") {
        salida = false;
        break;
      }
  
      let separacion = datos.split("-");
  
      // console.log(separacion);
      // console.log(misPrestamos);
  
      const Pres = new Prestamos(
        separacion[0],
        parseFloat(separacion[1]),
        parseFloat(separacion[2]),
        separacion[3]
      );
  
      misPrestamos.push(Pres);
  
      //Calculo el Id nuevo
      Pres.IdPrestamos(misPrestamos);
  
      //Calculo cuanto sera la cuota y el interes
      Pres.TotalPrestamos(Pres);
  
      //Calculo la fecha de finalizacion
      Pres.calcularFechas(Pres);
  
      console.log(misPrestamos);
    }
  }
  
  //  David-30000-1400-S