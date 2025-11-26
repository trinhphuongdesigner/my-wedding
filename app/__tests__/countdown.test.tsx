/**
 * Countdown Timer Verification Tests
 * Requirements: 13.1, 13.2, 13.3
 * 
 * This test suite verifies that the countdown timer:
 * - Calculates time correctly
 * - Updates every second
 * - Displays 00 when the wedding date arrives
 */

import { render, waitFor } from '@testing-library/react';
import Home from '../page';

// Mock Date to control time in tests
let mockTime: number;

const RealDate = Date;

const mockDate = (dateString: string) => {
  mockTime = new RealDate(dateString).getTime();
  jest.spyOn(global.Date, 'now').mockImplementation(() => mockTime);
  global.Date = class extends RealDate {
    constructor(...args: any[]) {
      if (args.length === 0) {
        super(mockTime);
      } else {
        super(...args);
      }
    }
    static now() {
      return mockTime;
    }
  } as any;
};

const restoreDate = () => {
  global.Date = RealDate;
  jest.restoreAllMocks();
};

describe('Countdown Timer - Requirements 13.1, 13.2, 13.3', () => {
  beforeEach(() => {
    jest.clearAllTimers();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
    restoreDate();
  });

  describe('13.1 - Countdown calculates correctly', () => {
    it('should calculate days, hours, minutes, seconds correctly when far from wedding date', async () => {
      // Set current time to 2026-04-01 00:00:00 (3 days, 11 hours, 45 minutes before wedding)
      mockDate('2026-04-01T00:00:00');
      
      render(<Home />);
      
      // Wait for initial countdown update
      await waitFor(() => {
        const daysElement = document.getElementById('days');
        const hoursElement = document.getElementById('hours');
        const minutesElement = document.getElementById('minutes');
        
        expect(daysElement?.textContent).toBe('03');
        expect(hoursElement?.textContent).toBe('11');
        expect(minutesElement?.textContent).toBe('45');
      });
    });

    it('should calculate correctly when 1 day before wedding', async () => {
      // Set current time to 2026-04-03 11:45:00 (exactly 1 day before)
      mockDate('2026-04-03T11:45:00');
      
      render(<Home />);
      
      await waitFor(() => {
        const daysElement = document.getElementById('days');
        const hoursElement = document.getElementById('hours');
        const minutesElement = document.getElementById('minutes');
        const secondsElement = document.getElementById('seconds');
        
        expect(daysElement?.textContent).toBe('01');
        expect(hoursElement?.textContent).toBe('00');
        expect(minutesElement?.textContent).toBe('00');
        expect(secondsElement?.textContent).toBe('00');
      });
    });

    it('should calculate correctly when less than 1 hour before wedding', async () => {
      // Set current time to 2026-04-04 11:00:00 (45 minutes before)
      mockDate('2026-04-04T11:00:00');
      
      render(<Home />);
      
      await waitFor(() => {
        const daysElement = document.getElementById('days');
        const hoursElement = document.getElementById('hours');
        const minutesElement = document.getElementById('minutes');
        
        expect(daysElement?.textContent).toBe('00');
        expect(hoursElement?.textContent).toBe('00');
        expect(minutesElement?.textContent).toBe('45');
      });
    });

    it('should calculate correctly when less than 1 minute before wedding', async () => {
      // Set current time to 2026-04-04 11:44:30 (30 seconds before)
      mockDate('2026-04-04T11:44:30');
      
      render(<Home />);
      
      await waitFor(() => {
        const daysElement = document.getElementById('days');
        const hoursElement = document.getElementById('hours');
        const minutesElement = document.getElementById('minutes');
        const secondsElement = document.getElementById('seconds');
        
        expect(daysElement?.textContent).toBe('00');
        expect(hoursElement?.textContent).toBe('00');
        expect(minutesElement?.textContent).toBe('00');
        expect(secondsElement?.textContent).toBe('30');
      });
    });
  });

  describe('13.2 - Countdown updates every second', () => {
    it('should update seconds value after 1 second', async () => {
      // Set current time to 2026-04-04 11:44:30 (30 seconds before)
      mockDate('2026-04-04T11:44:30');
      
      render(<Home />);
      
      // Initial value
      await waitFor(() => {
        const secondsElement = document.getElementById('seconds');
        expect(secondsElement?.textContent).toBe('30');
      });
      
      // Advance mock time by 1 second
      mockTime += 1000;
      jest.advanceTimersByTime(1000);
      
      await waitFor(() => {
        const secondsElement = document.getElementById('seconds');
        expect(secondsElement?.textContent).toBe('29');
      });
    });

    it('should update minutes when seconds reach 0', async () => {
      // Set current time to 2026-04-04 11:43:59 (1 minute 1 second before)
      mockDate('2026-04-04T11:43:59');
      
      render(<Home />);
      
      // Initial value
      await waitFor(() => {
        const minutesElement = document.getElementById('minutes');
        const secondsElement = document.getElementById('seconds');
        expect(minutesElement?.textContent).toBe('01');
        expect(secondsElement?.textContent).toBe('01');
      });
      
      // Advance mock time by 2 seconds
      mockTime += 2000;
      jest.advanceTimersByTime(2000);
      
      await waitFor(() => {
        const minutesElement = document.getElementById('minutes');
        const secondsElement = document.getElementById('seconds');
        expect(minutesElement?.textContent).toBe('00');
        expect(secondsElement?.textContent).toBe('59');
      });
    });

    it('should continuously update every second', async () => {
      mockDate('2026-04-04T11:44:55');
      
      render(<Home />);
      
      // Check initial value
      await waitFor(() => {
        const secondsElement = document.getElementById('seconds');
        expect(secondsElement?.textContent).toBe('05');
      });
      
      // Advance 1 second
      mockTime += 1000;
      jest.advanceTimersByTime(1000);
      await waitFor(() => {
        const secondsElement = document.getElementById('seconds');
        expect(secondsElement?.textContent).toBe('04');
      });
      
      // Advance another second
      mockTime += 1000;
      jest.advanceTimersByTime(1000);
      await waitFor(() => {
        const secondsElement = document.getElementById('seconds');
        expect(secondsElement?.textContent).toBe('03');
      });
      
      // Advance another second
      mockTime += 1000;
      jest.advanceTimersByTime(1000);
      await waitFor(() => {
        const secondsElement = document.getElementById('seconds');
        expect(secondsElement?.textContent).toBe('02');
      });
    });
  });

  describe('13.3 - Display 00 when wedding date arrives', () => {
    it('should display 00 for all values when exactly at wedding time', async () => {
      // Set current time to exactly wedding time
      mockDate('2026-04-04T11:45:00');
      
      render(<Home />);
      
      await waitFor(() => {
        const daysElement = document.getElementById('days');
        const hoursElement = document.getElementById('hours');
        const minutesElement = document.getElementById('minutes');
        const secondsElement = document.getElementById('seconds');
        
        expect(daysElement?.textContent).toBe('00');
        expect(hoursElement?.textContent).toBe('00');
        expect(minutesElement?.textContent).toBe('00');
        expect(secondsElement?.textContent).toBe('00');
      });
    });

    it('should display 00 for all values when after wedding time', async () => {
      // Set current time to 1 hour after wedding
      mockDate('2026-04-04T12:45:00');
      
      render(<Home />);
      
      await waitFor(() => {
        const daysElement = document.getElementById('days');
        const hoursElement = document.getElementById('hours');
        const minutesElement = document.getElementById('minutes');
        const secondsElement = document.getElementById('seconds');
        
        expect(daysElement?.textContent).toBe('00');
        expect(hoursElement?.textContent).toBe('00');
        expect(minutesElement?.textContent).toBe('00');
        expect(secondsElement?.textContent).toBe('00');
      });
    });

    it('should display 00 for all values when 1 day after wedding', async () => {
      // Set current time to 1 day after wedding
      mockDate('2026-04-05T11:45:00');
      
      render(<Home />);
      
      await waitFor(() => {
        const daysElement = document.getElementById('days');
        const hoursElement = document.getElementById('hours');
        const minutesElement = document.getElementById('minutes');
        const secondsElement = document.getElementById('seconds');
        
        expect(daysElement?.textContent).toBe('00');
        expect(hoursElement?.textContent).toBe('00');
        expect(minutesElement?.textContent).toBe('00');
        expect(secondsElement?.textContent).toBe('00');
      });
    });

    it('should keep displaying 00 even as time continues to pass after wedding', async () => {
      // Set current time to after wedding
      mockDate('2026-04-04T12:00:00');
      
      render(<Home />);
      
      // Initial check
      await waitFor(() => {
        const daysElement = document.getElementById('days');
        expect(daysElement?.textContent).toBe('00');
      });
      
      // Advance mock time by 10 seconds
      mockTime += 10000;
      jest.advanceTimersByTime(10000);
      
      // Should still be 00
      await waitFor(() => {
        const daysElement = document.getElementById('days');
        const hoursElement = document.getElementById('hours');
        const minutesElement = document.getElementById('minutes');
        const secondsElement = document.getElementById('seconds');
        
        expect(daysElement?.textContent).toBe('00');
        expect(hoursElement?.textContent).toBe('00');
        expect(minutesElement?.textContent).toBe('00');
        expect(secondsElement?.textContent).toBe('00');
      });
    });
  });

  describe('Countdown Timer Integration', () => {
    it('should have countdown elements with correct IDs', () => {
      render(<Home />);
      
      const daysElement = document.getElementById('days');
      const hoursElement = document.getElementById('hours');
      const minutesElement = document.getElementById('minutes');
      const secondsElement = document.getElementById('seconds');
      
      expect(daysElement).toBeTruthy();
      expect(hoursElement).toBeTruthy();
      expect(minutesElement).toBeTruthy();
      expect(secondsElement).toBeTruthy();
    });

    it('should format single digit values with leading zero', async () => {
      // Set time to have single digit values
      // Wedding is at 11:45:00, so 11:40:05 means 4 minutes 55 seconds remaining
      mockDate('2026-04-04T11:40:05');
      
      render(<Home />);
      
      await waitFor(() => {
        const minutesElement = document.getElementById('minutes');
        const secondsElement = document.getElementById('seconds');
        
        // 4 minutes should be displayed as "04"
        expect(minutesElement?.textContent).toBe('04');
        // 55 seconds should be displayed as "55"
        expect(secondsElement?.textContent).toBe('55');
      });
    });
  });
});
