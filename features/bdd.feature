Feature: Verify headers in rp

  Scenario: User verifies all launches headers
    When Bob goes to launches
    Then Bob verifies launches headers
      | start time     |
      | total          |
      | passed         |
      | failed         |
      | skipped        |
      | product bug    |
      | auto bug       |
      | system issue   |
      | to investigate |
    And Bob verifies launches headers quantity
      | header         | quantity |
      | start time     |        1 |
      | total          |        1 |
      | passed         |        1 |
      | failed         |        1 |
      | skipped        |        1 |
      | product bug    |        1 |
      | auto bug       |        1 |
      | system issue   |        1 |
      | to investigate |        1 |

  Scenario: User verifies separate launch headers
    When Bob goes to launches
    And Bob opens 1 launch
    Then Bob verifies launches headers
      | start time     |
      | total          |
      | passed         |
      | failed         |
      | skipped        |
      | product bug    |
      | auto bug       |
      | system issue   |
      | to investigate |
    And Bob verifies launches headers quantity
      | header         | quantity |
      | start time     |        1 |
      | total          |        1 |
      | passed         |        1 |
      | failed         |        1 |
      | skipped        |        1 |
      | product bug    |        1 |
      | auto bug       |        1 |
      | system issue   |        1 |
      | to investigate |        1 |