const mongoose = require('mongoose');

 // PROF SET UP
 // Prof Schema Declaration
 const SchemaProf = mongoose.Schema;
 // Professor Schema
 const ProfSchema = new SchemaProf ({
     name: String,
     univID: Number,
     department: String,
     classes: String
 });
 // Professor Model
 const Profs = mongoose.model('Professor', ProfSchema);

 module.exports = Profs;