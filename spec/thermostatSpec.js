describe('Thermostat', function(){
  var thermostat;

  beforeEach(function(){
      thermostat = new Thermostat()
  });

  describe('thermostat', function(){
    it('has a default temperature of 20 C', function(){
      expect(thermostat.temp).toEqual(20);
    });

    it('can be turned up', function(){
      expect(thermostat.temp).toBe(20);
      thermostat.up()
      expect(thermostat.temp).toBe(21);
      thermostat.up()
      expect(thermostat.temp).toBe(22);
    });

    it('should throw error if maximum temperature reached', function(){
      for(let i = 1; i < 6; i++){
        thermostat.up();
      }
      expect(function(){ thermostat.up()}).toThrow('Maximum temperature reached');
    });

    it('can be turned down', function(){
      expect(thermostat.temp).toBe(20);
      thermostat.down()
      expect(thermostat.temp).toBe(19);
      thermostat.down()
      expect(thermostat.temp).toBe(18);
    });

    it('It throws an error when minTemp reached', function(){
      for(let i = 1; i < 11 ; i++){
         thermostat.down()
      }
      expect(function(){ thermostat.down() }).toThrow('Minimum temperature reached');
    });
  });

  describe('power saving mode', function(){
    it('should be on by default', function(){
      expect(thermostat.PowerSaveMode).toBe(true);
    });

    it('has a maximum temperature of 25 when on', function(){
      expect(thermostat.maxTemp).toBe(25)
    });
  });

  describe('switchPSM', function(){
    it('turns power saving mode on or off', function(){
     thermostat.switchPSM()
     expect(thermostat.PowerSaveMode).toBe(false);
    });

    it('throws error if power saving mode on and tries to increase', function(){
      thermostat.switchPSM()
      for(let i = 1; i < 13; i++){
        thermostat.up();
      }
      expect(function(){ thermostat.up() }).toThrow('Power save mode on - the maximum temperature reached');
    });
  });

  describe('reset', function(){
    it('resets the temperature to 20 C', function(){
        thermostat.up()
        thermostat.reset()
        expect(thermostat.temp).toBe(20)
    });
  });

  describe('energy usage', function(){

    it('displays low-usage when the temp is below 18 C', function (){
      for(let i = 1; i < 6; i++){
        thermostat.down();
      }
      expect(thermostat.energyUsage()).toEqual("low-usage");
    });

    it('displays medium-usage when the temp is between 18 and 25 C', function(){
      expect(thermostat.energyUsage()).toEqual("medium-usage");
    });

    it('displays high-usage when the temp is more than 25 C', function(){
      thermostat.switchPSM();
      for(let i = 1; i < 10; i++){
        thermostat.up();
      }
      expect(thermostat.energyUsage()).toEqual("high-usage");
    });
  });
});
