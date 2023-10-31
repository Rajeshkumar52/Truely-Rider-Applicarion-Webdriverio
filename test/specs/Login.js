describe('Rider Login', () => {

    it('should log in', async () => {

        driver.installApp("/home/sparkout/Truely_Rider/Driver App/TruelyDeliveryDev21.apk")

        const app = await $('~Truely Delivery')

        await app.click()

        //Login details

        await $('//android.widget.EditText[@resource-id="com.truely.rider:id/login_mail_edt"]').setValue(6111111111)

        await $('//android.widget.EditText[@resource-id="com.truely.rider:id/login_pswd_edt"]').setValue('Test@123')

        await $('//android.widget.TextView[@resource-id="com.truely.rider:id/login_txt"]').click()

        //Location access

        const location_allow = await $('//android.widget.Button[@resource-id="com.truely.rider:id/txt_allow"]')

        driver.waitUntil(location_allow.waitForDisplayed)

        await location_allow.click()

        const location_access = await $('//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_allow_foreground_only_button"]')

        driver.waitUntil(location_access.waitForDisplayed)

        await location_access.click()

        const location_permission = await $('//android.widget.RadioButton[@resource-id="com.android.permissioncontroller:id/allow_always_radio_button"]')

        driver.waitUntil(location_permission.waitForDisplayed)

        await location_permission.click()

        await await $('//android.widget.ImageButton[@content-desc="Back"]').click()

        const location_on = await $('//android.widget.Button[@resource-id="android:id/button1"]')

        driver.waitUntil(location_on.waitForDisplayed)

        await location_on.click()

        const notification_allow = await $('//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_allow_button"]')

        driver.waitUntil(notification_allow.waitForDisplayed)

        await notification_allow.click()

        const run_background = await $('//android.widget.Button[@resource-id="android:id/button1"]')

        driver.waitUntil(run_background.waitForDisplayed)

        await run_background.click()



        await $('//android.widget.TextView[@resource-id="com.truely.rider:id/login_txt"]').click()

        driver.openNotifications()

        const order_notification = await $('//android.widget.LinearLayout[@resource-id="com.android.systemui:id/keyguard_message_area_container"]')

        driver.waitUntil(order_notification.waitForDisplayed)

        await order_notification.click()

        const order_accept = await $('//android.widget.Button[@resource-id="com.truely.rider:id/btm_accept_txt"]')

        driver.waitUntil(order_accept.waitForDisplayed)

        await order_accept.click

        const reached_restaurant = await $('//android.widget.TextView[@resource-id="com.truely.rider:id/btm_status_update_txt"]')

        driver.waitUntil(reached_restaurant.waitForClickable)

        await reached_restaurant.click()

        const start_towards_customer = await $('//android.widget.TextView[@resource-id="com.truely.rider:id/btm_status_update_txt"]')

        driver.waitUntil(start_towards_customer.waitForClickable)

        await start_towards_customer.click()

        const reached_customer_location = await $('//android.widget.TextView[@resource-id="com.truely.rider:id/btm_status_update_txt"]')

        driver.waitUntil(reached_customer_location.waitForClickable)

        await reached_customer_location.click()

        const food_delivered = await $('//android.widget.TextView[@resource-id="com.truely.rider:id/btm_status_update_txt"]')

        driver.waitUntil(food_delivered.waitForClickable)

        await food_delivered.click()





    })


})