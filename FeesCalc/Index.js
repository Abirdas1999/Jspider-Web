
let fees = [
	{
		id: 101,
		cName: "Java",
		totalFees: 65000,
		duration: "6 Months",
		concession: { General: 2000, OBC: 3000, "ST/SC": 5000 },
	},
	{
		id: 102,
		cName: "Python",
		totalFees: 55000,
		duration: "6 Months",
		concession: { General: 2000, OBC: 3000, ST: 5000 },
	},
	{
		id: 103,
		cName: "JavaScript",
		totalFees: 45000,
		duration: "6 Months",
		concession: { General: 2000, OBC: 3000, ST: 5000 },
	},
	{
		id: 103,
		cName: "MERN",
		totalFees: 35000,
		duration: "6 Months",
		concession: { General: 2000, OBC: 3000, ST: 5000 },
	},
	{
		id: 103,
		cName: "Data Science",
		totalFees: 55000,
		duration: "6 Months",
		concession: { General: 2000, OBC: 3000, ST: 5000 },
	},
	{
		id: 103,
		cName: "Testing",
		totalFees: 25000,
		duration: "6 Months",
		concession: { General: 2000, OBC: 3000, ST: 5000 },
	},
];

document.getElementById("courseSelect").addEventListener("change", function () {
	document.getElementById("totalFees").value = fees.find(
		(fee) => fee.cName === this.value
	).totalFees;

    let selectedCourse = fees.find((fee) => fee.cName === this.value);
});


//radio button handling for concession
let gen = document.getElementById("cast-1");
let obc = document.getElementById("cast-2");
let scst = document.getElementById("cast-3");
if (gen.checked) {
	document.getElementById("conFees").value = fees.find(
		(fee) => fee.cName === document.getElementById("courseSelect").value
	).concession.General;
} else if (obc.checked) {
	document.getElementById("conFees").value = fees.find(
		(fee) => fee.cName === document.getElementById("courseSelect").value
	).concession.OBC;
} else if (scst.checked) {
	document.getElementById("conFees").value = fees.find(
		(fee) => fee.cName === document.getElementById("courseSelect").value
	).concession.ST;
}

//paid fees handling
document.getElementById("conFees").addEventListener("input", function () {
    let totalFees = document.getElementById("totalFees").value;
    let conFees = this.value;
    let paidFees = document.getElementById("paidFees").value;

    let dueFees = totalFees - conFees - paidFees;
   let DueValue =  document.getElementById("dueFees").value = dueFees;

});




