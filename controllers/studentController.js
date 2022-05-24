import StudentModel from "../models/Student.js"

class StudentController {

    static createDoc = async (req, res) => {
        // Crearing Document
        try {
            const { name, phone, state, address, email,country,city,zipcode } = req.body
            const doc = new StudentModel({
                name: name,
                phone:phone,
                state:state,
                address:address,
                email:email,
                country:country,
                city:city,
                zipcode:zipcode
            })
            // Saving Document
            const result = await doc.save()
            console.log(result);
            res.redirect("/student")
        } catch (error) {
            console.log(error);
        }
    }


    static getAllDoc = async (req, res) => {
        try {
            const result = await StudentModel.find()
            // console.log(result)
            res.render("index", { data: result })
        } catch (error) {
            console.log(error)
        }

    }

    // Show Edit Form with Data
    static editDoc = async (req, res) => {
        // console.log(req.params.id);
        try {
            const result = await StudentModel.findById(req.params.id)
            res.render("edit", { data: result })
        } catch (error) {
            console.log(error)
        }

    }

    static temp = async (req, res) => {
        res.render("temp")
    }
    static updateDocById = async (req, res) => {
        try {
            const result = await StudentModel.findByIdAndUpdate(req.params.id, req.body)
            console.log(result);
        } catch (error) {
            res.redirect("/student")
        }
        res.redirect("/student")
    }

    static deleteDocById = async (req, res) => {
        // console.log(req.params.id)
        // res.redirect("/student")
        try {
            const result = await StudentModel.findByIdAndDelete(req.params.id)
            res.redirect("/student")
        } catch (error) {
            console.log(error);
        }

    }
}

export default StudentController;