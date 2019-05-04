function Thermostat(){
  this.temp = 20;
  this.minTemp = 10;
  this.PowerSaveMode = true;
  this.maxTemp = 25;
};

Thermostat.prototype.reset = function(){
  return this.temp = 20;
};

Thermostat.prototype.up = function(){
  if(this.PowerSaveMode == true && this.temp >= this.maxTemp){
    throw('Maximum temperature reached')
  }

  if(this.PowerSaveMode == false && this.temp >= 32){
    throw('Power save mode on - the maximum temperature reached')
  }
  try{
      return ++this.temp;
   }
   catch(err){
       this.temp = this.maxTemp;
       this.temp = 32;
   }
 };

  Thermostat.prototype.down = function(){
    if(this.temp <= 10){
      throw('Minimum temperature reached');
    }
    try {
      return --this.temp;
    }
    catch(err){
      return this.temp = this.minTemp;
    }
  };

  Thermostat.prototype.switchPSM = function(){
    this.PowerSaveMode = !this.PowerSaveMode;
    this._changeMaxLimit();
    if (this.temp > this.maxTemp) {
      this.temp = this.maxTemp;
    } else { this.temp = this.temp }
  };

  Thermostat.prototype._changeMaxLimit = function() {
    if (this.powerSaveMode === false) {
      return this.maxTemp= 32;
    }
      this.maxTemp = 25;
  };

  Thermostat.prototype.energyUsage = function() {
    if (this.temp < 18) { return "low-usage"; }
    else if (this.temp > 25 ) { return "high-usage";}
    return "medium-usage";
  };
