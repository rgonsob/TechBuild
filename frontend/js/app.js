	/*=======================================
	ESTABLECE LA MARCA DEL PROCESADOR
	=========================================*/
	if($('.processor-brand').length > 0) {

		// SI HAY UN CLICK
		$('.processor-brand').click(function(){

			// SE OBTIENEN LOS VALORES
			var url   = $('#url-location').data('url');
			var brand = $(this).data('brand');
			var $this = $(this);

			// SE MANDA EL AJAX
			$.ajax({
				type:     'get',
				dataType: 'json',
				url:      url + 'ajax/pc_set_brand.json',
				data:     'brand=' + brand,
				success:  function(response)
				{
					// SI SE EJECUTO CORRECTAMENTE EL AJAX
					if(response.msg == 'ok')
					{
						// SE REDIRECCIONA AL PASO 2
						window.location.assign($this.attr('href'));
					}
				}
			});//AJAX

			return false;
		});
	}

	/*=======================================
	ESTABLECE EL PROCESADOR
	=========================================*/
	if($('.processor').length > 0) {

		// SI HAY UN CLICK
		$('.processor').click(function(){

			// SE OBTIENEN LOS VALORES
			var url       = $('#url-location').data('url');
			var processor = $(this).data('processor');
			var $this     = $(this);

			// SE MANDA EL AJAX
			$.ajax({
				type:     'get',
				dataType: 'json',
				url:      url + 'ajax/pc_set_processor.json',
				data:     'processor=' + processor,
				success:  function(response)
				{
					// SI SE EJECUTO CORRECTAMENTE EL AJAX
					if(response.msg == 'ok')
					{
						// SE REDIRECCIONA AL PASO 3
						window.location.assign($this.attr('href'));
					}
				}
			});//AJAX

			return false;
		});
	}

	/*=======================================
	ESTABLECE LA TARJETA MADRE
	=========================================*/
	if($('.motherboard').length > 0) {

		// SI HAY UN CLICK
		$('.motherboard').click(function(){

			// SE OBTIENEN LOS VALORES
			var url         = $('#url-location').data('url');
			var motherboard = $(this).data('motherboard');
			var $this       = $(this);

			// SE MANDA EL AJAX
			$.ajax({
				type:     'get',
				dataType: 'json',
				url:      url + 'ajax/pc_set_motherboard.json',
				data:     'motherboard=' + motherboard,
				success:  function(response)
				{
					// SI SE EJECUTO CORRECTAMENTE EL AJAX
					if(response.msg == 'ok')
					{
						// SE REDIRECCIONA AL PASO 4
						window.location.assign($this.attr('href'));
					}
				}
			});//AJAX

			return false;
		});
	}

	/*=======================================
	ESTABLECE LA MEMORIA RAM
	=========================================*/
	if($('.ram').length > 0) {

		// SI HAY UN CLICK
		$('.ram').click(function(){

			// SE OBTIENEN LOS VALORES
			var url   = $('#url-location').data('url');
			var ram   = $(this).data('ram');
			var $this = $(this);

			// SE MANDA EL AJAX
			$.ajax({
				type:     'get',
				dataType: 'json',
				url:      url + 'ajax/pc_set_ram.json',
				data:     'ram=' + ram,
				success:  function(response)
				{
					// SI SE EJECUTO CORRECTAMENTE EL AJAX
					if(response.msg == 'ok')
					{
						// SE REDIRECCIONA AL PASO 6
						window.location.assign($this.attr('href'));
					}
				}
			});//AJAX

			return false;
		});
	}

	/*=======================================
	ESTABLECE LA TARJETA DE VIDEO
	=========================================*/
	if($('.graphic_card').length > 0) {

		// SI HAY UN CLICK
		$('.graphic_card').click(function(){

			// SE OBTIENEN LOS VALORES
			var url          = $('#url-location').data('url');
			var graphic_card = $(this).data('graphic_card');
			var $this        = $(this);

			// SE MANDA EL AJAX
			$.ajax({
				type:     'get',
				dataType: 'json',
				url:      url + 'ajax/pc_set_graphic_card.json',
				data:     'graphic_card=' + graphic_card,
				success:  function(response)
				{
					// SI SE EJECUTO CORRECTAMENTE EL AJAX
					if(response.msg == 'ok')
					{
						// SE REDIRECCIONA AL PASO 8
						window.location.assign($this.attr('href'));
					}
				}
			});//AJAX

			return false;
		});
	}

	/*=======================================
	ESTABLECE EL ALMACENAMIENTO
	=========================================*/
	if($('.storage').length > 0) {

		// SI HAY UN CLICK
		$('.storage').click(function(){

			// SE OBTIENEN LOS VALORES
			var url     = $('#url-location').data('url');
			var storage = $(this).data('storage');
			var $this   = $(this);

			// SE MANDA EL AJAX
			$.ajax({
				type:     'get',
				dataType: 'json',
				url:      url + 'ajax/pc_set_storage.json',
				data:     'storage=' + storage,
				success:  function(response)
				{
					// SI SE EJECUTO CORRECTAMENTE EL AJAX
					if(response.msg == 'ok')
					{
						// SE REDIRECCIONA AL PASO 9
						window.location.assign($this.attr('href'));
					}
				}
			});//AJAX

			return false;
		});
	}

	/*=======================================
	ESTABLECE EL GABINETE
	=========================================*/
	if($('.cabinet').length > 0) {

		// SI HAY UN CLICK
		$('.cabinet').click(function(){

			// SE OBTIENEN LOS VALORES
			var url     = $('#url-location').data('url');
			var cabinet = $(this).data('cabinet');
			var $this   = $(this);

			// SE MANDA EL AJAX
			$.ajax({
				type:     'get',
				dataType: 'json',
				url:      url + 'ajax/pc_set_cabinet.json',
				data:     'cabinet=' + cabinet,
				success:  function(response)
				{
					// SI SE EJECUTO CORRECTAMENTE EL AJAX
					if(response.msg == 'ok')
					{
						// SE REDIRECCIONA AL PASO 11
						window.location.assign($this.attr('href'));
					}
				}
			});//AJAX

			return false;
		});
	}

	/*=======================================
	ESTABLECE LA FUENTE DE PODER
	=========================================*/
	if($('.power_supply').length > 0) {

		// SI HAY UN CLICK
		$('.power_supply').click(function(){

			// SE OBTIENEN LOS VALORES
			var url          = $('#url-location').data('url');
			var power_supply = $(this).data('power_supply');
			var $this        = $(this);

			// SE MANDA EL AJAX
			$.ajax({
				type:     'get',
				dataType: 'json',
				url:      url + 'ajax/pc_set_power_supply.json',
				data:     'power_supply=' + power_supply,
				success:  function(response)
				{
					// SI SE EJECUTO CORRECTAMENTE EL AJAX
					if(response.msg == 'ok')
					{
						// SE REDIRECCIONA AL PASO 12
						window.location.assign($this.attr('href'));
					}
				}
			});//AJAX

			return false;
		});
	}

	/*=======================================
	ESTABLECE EL ENSAMBLADO
	=========================================*/
	if($('.assembly').length > 0) {

		// SI HAY UN CLICK
		$('.assembly').click(function(){

			// SE OBTIENEN LOS VALORES
			var url      = $('#url-location').data('url');
			var assembly = $(this).data('assembly');
			var $this    = $(this);

			// SE MANDA EL AJAX
			$.ajax({
				type:     'get',
				dataType: 'json',
				url:      url + 'ajax/pc_set_assembly.json',
				data:     'assembly=' + assembly,
				success:  function(response)
				{
					// SI SE EJECUTO CORRECTAMENTE EL AJAX
					if(response.msg == 'ok')
					{
						// SE REDIRECCIONA AL PASO 13
						window.location.assign($this.attr('href'));
					}
				}
			});//AJAX

			return false;
		});
	}