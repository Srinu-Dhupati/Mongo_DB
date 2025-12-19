//in MongoDB, we need to use $set operator to update the record fields 

syntax:
	database_name.collection_name.updateOne({field1:'field_value1'},{$set:{field2:'fieldvalue2'}})
//field1: where you want to update that record field
//field_value1: this must match the exact value in record field value
//field2 : which field you want to update 
//field_value2: give value in that palce which you wnat update_value


db.college_students.updateOne({name:"srinu"},{$set:{age:23}});



// to mutliple filed at a time

db.college_students.updateMany({},{$set:{age:21}});

//another way


db.products.bulkWrite([
  {
    updateOne: {
      filter: { _id: ObjectId("doc1_id") },
      update: { $set: { price: 10.99, stock: 100 } }
    }
  },
  {
    updateOne: {
      filter: { _id: ObjectId("doc2_id") },
      update: { $inc: { stock: -5 }, $set: { lastUpdated: new Date() } }
    }
  },
  {
    updateOne: {
      filter: { _id: ObjectId("doc3_id") },
      update: { $set: { price: 5.50 } }
    }
  }
]);


