
def making_tupes(the_dict):
    the_list = []
    # here, k and v will parse each tuple of key,value pairs returned by .iteritems()
    for k, v in the_dict.items():
        the_list.append((k,v))
    return(the_list)

print(making_tupes({"speros": "55-555-1234", "michael": "999-999-99999"}))