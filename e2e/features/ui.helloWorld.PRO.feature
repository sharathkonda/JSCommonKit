@Project:Hello-World @Type:web
@helloworld @acceptance
@pro

Feature: Hello world website
        Test to validate hello world website

    @Priority-P1 @id:helloworld_001
    Scenario: Verify website title
        Given I have navigated to url <www.google.co.uk/>
        When title is displayed
        Then title text contains <It’s Cyber Security Month. Stay safer online with a quick>
        