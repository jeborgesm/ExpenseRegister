var Expenses = angular.module('Expenses', []);

Expenses.controller('LandingPageController', LandingPageController);

Expenses.controller('crudController', ['$scope', '$http', function ($scope, $http) {
    $scope.loading = true;
    $scope.addMode = false;

    //Used to display the data  
    $http.get('/api/Expenses/').success(function (data) {
        $scope.expenses = data;
        $scope.loading = false;
       // LandingPageController.$inject = ['$scope'];
    })
    .error(function () {
        $scope.error = "An Error has occured while loading expenses data!";
        $scope.loading = false;
    });

    $scope.toggleEdit = function () {
        this.expenses.editMode = !this.expenses.editMode;
    };
    $scope.toggleAdd = function () {
        $scope.addMode = !$scope.addMode;
    };

    //Used to save a record after edit  
    $scope.save = function () {
        alert("Edit");
        $scope.loading = true;
        var exp = this.expenses;
        alert(emp);
        $http.put('/api/Expenses/', exp).success(function (data) {
            alert("Saved Successfully!!");
            emp.editMode = false;
            $scope.loading = false;
        }).error(function (data) {
            $scope.error = "An Error has occured while Saving Expenses! " + data;
            $scope.loading = false;

        });
    };

    //Used to add a new record  
    $scope.add = function () {
        $scope.loading = true;
        var exp = this.Expenses;
        $http.post('/api/Expenses/', {
            Date: exp.Date,
            Description: exp.Description,
            Amount: exp.Amount
        }).success(function (data) {
            alert("Added Successfully!!");
            $scope.addMode = false;
            $scope.expenses.push(data);
            $scope.loading = false;
        }).error(function (data) {
            $scope.error = "An Error has occured while Adding Expense! " + data;
            $scope.loading = false;

        });
    };

    //Used to edit a record  
    $scope.deleteExpense = function () {
        $scope.loading = true;
        var expenseid = this.expense.expenseid;
        $http.delete('/api/Expenses/' + expenseid).success(function (data) {
            alert("Deleted Successfully!!");
            $.each($scope.expenses, function (i) {
                if ($scope.expenses[i].ExpenseId === expenseid) {
                    $scope.expenses.splice(i, 1);
                    return false;
                }
            });
            $scope.loading = false;
        }).error(function (data) {
            $scope.error = "An Error has occured while Saving Expense! " + data;
            $scope.loading = false;

        });
    };

}]);