var app = angular.module("Moja aplikacija", [])
app.controller("myController", function ($scope) {
    $scope.filters = "";
    $scope.people = [{
        Ime: "Sara"
        , Prezime: "Kuzmanova"
        , Broj: "065852399"
    }, {
        Ime: "Lusija"
        , Prezime: "Aleksova"
        , Broj: "063456231"
    }, {
        Ime: "Lea"
        , Prezime: "Vaseva"
        , Broj: "062395743"
    }, {
        Ime: "Tanja"
        , Prezime: "Nikolova"
        , Broj: "064776644"
    }, {
        Ime: "Ana"
        , Prezime: "Leova"
        , Broj: "062340985"
    }];
    $scope.add = function () {
            $scope.editIme = "";
            $scope.editPrezime = "";
            $scope.editBroj = "";
            $(".adding").css({
                display: "block"
            });
            $(".adding").animate({
                top: "0px"
            }, 1000);
        }
    $scope.delete = function (item) {
        for (var i in $scope.people) {
            if ($scope.people[i] === item) {
                $scope.people.splice(i, 1);
            }
        }
    };
    $scope.change = function (item) {
        $(".edit").css({
            display: "block"
        });
        $(".edit").animate({
            top: "0px"
        }, 1000);
        for (var i in $scope.people) {
            if ($scope.people[i] === item) {
                $scope.editIme = $scope.people[i].Ime;
                $scope.editPrezime = $scope.people[i].Prezime;
                $scope.editBroj = $scope.people[i].Broj;
                $scope.index=i;
            }
        }
    };
    $scope.save = function () {
        $(".edit").animate({
            top: "-200px"
        }, 1000);
        setTimeout(function () {
            $(".edit").css({
                display: "none"
            });
            $(".background").css({
                display: "none"
            });
        }, 1000);
        $scope.people[$scope.index].Ime = $scope.editIme;
        $scope.people[$scope.index].Prezime = $scope.editPrezime;
        $scope.people[$scope.index].Broj = $scope.editBroj;
    };
    $scope.addNew = function () {
        $(".adding").animate({
            top: "-200px"
        }, 1000);
        setTimeout(function () {
            $(".adding").css({
                display: "none"
            })
        }, 1000);
        $scope.people.push({
            Ime: $scope.editIme
            , Prezime: $scope.editPrezime
            , Broj: $scope.editBroj
        });
    };
    $scope.filter = function (option) {
        $scope.filters = option;
    }
});
