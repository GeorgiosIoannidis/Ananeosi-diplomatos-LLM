//Main func
const getData = async (processId) => {
  //fetch request
  const req = await fetch(
    `https://api.digigov.grnet.gr/v1/services/${processId}`
  );
  //format the response
  const res = await req.json();
  //get the actual data of the json object
  const data = res.data.metadata;
  //destruct the object
  const { process, process_conditions, process_evidences } = data;

  //Process title
  console.log(process.official_title);

  console.log(
    "---------------------------------------------------------------------------------------------------------"
  );

  //Process description
  console.log(process.description);

  console.log(
    "---------------------------Απαιτούμενα Δικαιολογητικά---------------------------"
  );
  //loop the conditions
  process_conditions.map((e, i) =>
    console.log(`[${i + 1}]>> ${e.conditions_name}`)
  );

  console.log(
    "---------------------------Απαιτούμενες Προϋποθέσεις---------------------------"
  );
  //loop the evidence
  process_evidences.map((e, i) =>
    console.log(`[${i + 1}]>> ${e.evidence_description}`)
  );
};

//call the func with the process ID
getData(664541);
