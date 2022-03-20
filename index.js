const express = require('express')
const Joi = require('joi')
const db = require('./db')
const app = express()

app.use(express.json())

app.get('/', function (request, response) {
	return response.json({
		status: 'Successful',
		message: 'Request successful',
		data: []
	})
})

app.get('/api/get-virtual-accounts', function (request, response) {
	return response.json({
		status: 'Successful',
		message: 'Request successful',
		data: []
	})
})

app.post('/api/create-virtual-account', function (request, response) {
	const schema = Joi.object({
		first_name: Joi.string().required(),
		last_name: Joi.string().required(),
        email: Joi.string().email().required(),
		bvn: Joi.string().length(11).pattern(/^[0-9]+$/).required(),
		address: Joi.string().required(),
		phone: Joi.string().length(11).pattern(/^[0-9]+$/).required(),
	})

    




	const validation = schema.validate(request.body)
	if(validation.error && validation.error.details.length > 0) {
		return response.json({
			status: 'Failed',
			message: validation.error.details[0].message,
			data: null
		}, 400)
	}

	const account_number =  Math.floor(Math.random() * 9000000000) + 1000000000
    db.create(request.body, account_number)

    phoneNumberAlreadyExist() {

    }
    emailAddressAlreadyExist() {

    }
    bvnAlreadyExist() {
    }

   

	return response.json({
		status: 'Successful',
		message: 'Account number generated successfully. An email has been sent to customer.',
		data: {
			account_number
		}
	})
})

const port = 3000
console.log(`As i dey like this i cannot die until there is an error on port ${port}`)
app.listen(port)