const user = {
    name: "John Doe",
    email: "doejohn@email.com",
    friends: [{
      name: "Mary",
      address: {
        street: "Some Street",
        number: 89
      }
    }],
    age: 42,
    phone: {
      countryCode: "+55",
      ddd: "22",
      number: "998765432"
    }
  }

  // concole.log(user.friends[0].phone.ddd) encadiamento normal ultiliza .
  // encadiamento opicional ultiliza .?
  // ele faz uma verificação se a propriedade e nula ou undefined

  console.log(user.friends[0].phone?.ddd)
  console.log(user?.brothers?.length)
