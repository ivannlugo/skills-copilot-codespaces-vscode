function skillsMember() {
    var member = {
        name: "John",
        age: 25,
        skills: ["JavaScript", "HTML", "CSS"],
        showSkills: function() {
            this.skills.forEach(function(skill) {
                console.log(skill);
            });
        }
    };

    return member;
}