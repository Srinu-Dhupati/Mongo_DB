Comparison Operators ($eq, $ne, $gt, $gte, $lt, $lte, $in, $nin)

// Find users whose age is greater than 25
 
	db.users.find({age:{$gt:25}})

// Find users whose age is less than or equal to 22

	db.users.find({age:{$lte:22}})

// Find users whose city is Hyderabad

	db.users.find({city:{$eq:'Hyderabad'}});
	
	db.users.find({city:'Hyderabad'});

// Find users whose city is not Chennai

	db.users.find({city:{$ne:'chennai'}});

// Find users whose age is between 20 and 30

	db.users.find({$and:[{age:{$gt:20}},{age:{$lt:30}}]});

// Find users whose city is Hyderabad or Bangalore

	db.users.find({$or:[{city:"Hyderabad"},{city:"Banglore"}]});

// Find users whose age is not equal to 26

	db.users.find({age:{$ne:26}})

// Find students whose marks are greater than 80

	db.students.find({marks:{$gt:80}});

// Find students whose marks are between 70 and 90

	db.students.find({$and:[{marks:{$gt:70}},{marks:{$lt:90}}]});

// Find users whose age is not in (19, 22)

	db.users.find({age:{$nin:[19,20]}});
