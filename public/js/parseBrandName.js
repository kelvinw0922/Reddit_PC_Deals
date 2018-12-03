export default {
  parseBrandName: function(brandName, hot_deal) {
    let result = "";
    let matchedBrand = "";
    const listOfBrand = [
      "HP",
      "Samsung",
      "SAMSUNG",
      "Crucial",
      "CRUCIAL",
      "WD",
      "adata",
      "ADATA",
      "Adata",
      "Intel",
      "INTEL",
      "Kingston",
      "ASUS",
      "Asus",
      "GIGABYTE",
      "Gigabyte",
      "Silicon Power",
      "SILICON POWER",
      "Alienware",
      "ALIENWARE",
      "ACER",
      "Acer",
      "LG",
      "Dell",
      "MSI",
      "ViewSonic",
      "VIEWSONIC",
      "Logitech",
      "LOGITECH",
      "HyperX",
      "HYPERX",
      "Razer",
      "RAZER",
      "Corsair",
      "CORSAIR",
      "Steelseries",
      "SteelSeries",
      "STEELSERIES",
      "CoolerMaster",
      "COOLERMASTER",
      "Cooler Master",
      "Roccat",
      "ROCCAT"
    ];
    for (let i = 0; i < listOfBrand.length; i++) {
      if (brandName.includes(listOfBrand[i])) {
        matchedBrand = listOfBrand[i];
        break;
      }
    }

    // Check Matched Brand
    switch (matchedBrand) {
      case "HP":
        result = `<img src="/img/brand/hp.jpg" class="thumbnail">`;
        break;
      case "Samsung":
      case "SAMSUNG":
        result = `<img src="/img/brand/samsung.png" class="thumbnail">`;
        break;
      case "Crucial":
      case "CRUCIAL":
        result = `<img src="/img/brand/crucial.png" class="thumbnail">`;
        break;
      case "WD":
        result = `<img src="/img/brand/wd.jpg" class="thumbnail">`;
        break;
      case "ADATA":
      case "Adata":
      case "adata":
        result = `<img src="/img/brand/adata.jpg" class="thumbnail">`;
        break;
      case "Intel":
      case "INTEL":
        result = `<img src="/img/brand/intel.png" class="thumbnail">`;
        break;
      case "ASUS":
      case "Asus":
        result = `<img src="/img/brand/asus.jpg" class="thumbnail">`;
        break;
      case "Kingston":
        result = `<img src="/img/brand/kingston.jpg" class="thumbnail">`;
        break;
      case "Silicon Power":
      case "SILICON POWER":
        result = `<img src="/img/brand/silicon_power.jpg" class="thumbnail">`;
        break;
      case "Gigabyte":
      case "GIGABYTE":
        result = `<img src="/img/brand/gigabyte.jpg" class="thumbnail">`;
        break;
      case "Alienware":
      case "ALIENWARE":
        result = `<img src="/img/brand/alienware.jpg" class="thumbnail">`;
        break;
      case "Acer":
      case "ACER":
        result = `<img src="/img/brand/acer.jpg" class="thumbnail">`;
        break;
      case "LG":
        result = `<img src="/img/brand/lg.jpg" class="thumbnail">`;
        break;
      case "Dell":
        result = `<img src="/img/brand/dell.jpg" class="thumbnail">`;
        break;
      case "MSI":
        result = `<img src="/img/brand/msi.png" class="thumbnail">`;
        break;
      case "ViewSonic":
      case "VIEWSONIC":
        result = `<img src="/img/brand/viewsonic.jpg" class="thumbnail">`;
        break;
      case "Logitech":
      case "LOGITECH":
        result = `<img src="/img/brand/logitech.jpg" class="thumbnail">`;
        break;
      case "HyperX":
      case "HYPERX":
        result = `<img src="/img/brand/hyperx.png" class="thumbnail">`;
        break;
      case "Razer":
      case "RAZER":
        result = `<img src="/img/brand/razer.jpg" class="thumbnail">`;
        break;
      case "Corsair":
      case "CORSAIR":
        result = `<img src="/img/brand/corsair.png" class="thumbnail">`;
        break;
      case "Steelseries":
      case "SteelSeries":
      case "STEELSERIES":
        result = `<img src="/img/brand/steelseries.png" class="thumbnail">`;
        break;
      case "CoolerMaster":
      case "COOLERMASTER":
      case "Cooler Master":
        result = `<img src="/img/brand/coolermaster.png" class="thumbnail">`;
        break;
      case "Roccat":
      case "ROCCAT":
        result = `<img src="/img/brand/roccat.png" class="thumbnail">`;
        break;
      default:
        if (hot_deal) {
          result = `<img src="/img/hot_deal.jpg" class="thumbnail">`;
          break;
        } else {
          result = `<img src="/img/deals.png" class="thumbnail">`;
          break;
        }
    }
    return result;
  }
};
