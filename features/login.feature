Feature: Test the automation application

@test1
  Scenario: User should be able to login to the application
    Given I am on the login page
    When I click on signin link
    And I login with crdentials
    Then I should see a home page

@test2
Scenario:  adding item to cart and vlidating
    Given I am on the login page
    When I click on signin link
    And I login with crdentials
    And adding item to cart
    Then validating the item details

  
     
