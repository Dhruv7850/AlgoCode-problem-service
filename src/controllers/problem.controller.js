function pingControllerCheck(req, res) {
    return res.json({ message: "Problem controller is up" })
}

function addProblem(req, res) {
}

function getProblem(req, res) {

}

function getProblems(req, res) {

}

function deleteProblem(req, res) {

}
function upadateProblem(req, res) {

}

export default {
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    upadateProblem,
    pingControllerCheck
}