const person = {
    name: "Luke",
    job: "Farmer",
    parents: ["Anakin", "Padme"]
  }

  //Normal
  const nam = person.name

  console.log(nam)

  //desestruturação

  const { job, parents} = person

  console.log(job, parents)//obejeto

  const [a,b] = parents

  console.log(a,b)//array

