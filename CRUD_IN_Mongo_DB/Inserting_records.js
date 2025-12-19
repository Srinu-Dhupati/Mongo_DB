// in MongoDB,we follow the below Syntax to insert one record

Syntax:
	database_name.collection_name.insertOne({Documnet})


db.college_students.insertOne({name:"srinu",age:21,address:"5-16,Guntur"});


//in MongoDB, we follow the below Syntax to more than one record

syntax:
	database_name.collection_name.insertMany([{Document1},{Document2}])


db.college_students.insertMany([{name:"durga",age:19,address:"5-16,Guntur"},{name:"Sai kiran",age:21,addess:"kikaluru"}])