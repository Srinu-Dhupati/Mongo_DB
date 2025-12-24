Element Operators ($exists, $type)

// $exists:
//	db.collection_name.find({field_name:{$exists:true}) --> to get field name present records if you want not present one replace it with 'false'


//$type:
	db.collection_name.find({field_name:{$type:datatype}});


// Find users who have email field

	db.users.find({email:{$exists:true}});

// Find users who do not have email field

	db.users.find({email:{$exists:false}});

// Find users where age field exists

	db.users.find({age:{$exists:true}});

// Find users where skills field is an array

	db.users.find({skills:{$type:'array'}});

// Find users where email field is string

	db.users.find({email:{$type:'string'}});

// Find orders where items field exists

	db.orders.find({items:{$exists:true}});

// Find students where marks field exists

	db.students.find({marks:{$exists:true}});

// Find users where city field does not exist

	db.users.find({city:{$exists:false}});

// Find users where age field is number

	db.users.find({age:{$type:'number'}});