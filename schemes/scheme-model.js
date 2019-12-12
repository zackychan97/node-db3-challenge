// write helpers

module.exports = {
    find, // line 12
    findById, // line 17
    findSteps, // line 24
    add, // line 39
    update, // line 50
    remove // line 57
}

//find
function find(){
    return db('schemes');
}

//find by Id
function findById(id){
    return db('schemes')
    .where({ id })
    .first();
}

// findSteps
function findSteps(id){
    return db('steps')
        .select(
            "steps.id",
            "schemes.scheme_name as schemesName",
            "step_number as stepNumber",
            "instructions"
        )
        .from("steps")
        .jon("schemes", "steps.scheme_id", "schemes.id")
        .where({ scheme_id: id })
        .orderBy("step_number")
}

// add
function add(schemeData){
    return db('schemes')
        .insert(schemeData, 'id')
        .then(ids => {
            const [id] = ids;

            return findById
        })
}

// function update
function update(changes, id){
    return db('schemes')
        .where({ id })
        .update(changes, "*")
}

// function remove
function remove(id){
    return db('schemes')
        .where({ id })
        .del();
}